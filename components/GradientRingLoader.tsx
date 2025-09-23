import React, { useEffect } from "react";
import { ViewStyle } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";

/**
 * A rotating ring with a fading stroke (solid → transparent) along the path.
 */
type Props = {
  size?: number;             // diameter in px
  strokeWidth?: number;      // ring thickness
  durationMs?: number;       // ms per full rotation
  color?: string;            // base color (e.g., "#4a2f4e")
  opacityEnd?: number;       // 0..1 opacity at the trail end
  arc?: number;              // 0..1 length of visible arc (e.g., 0.7)
  style?: ViewStyle;         // container style (positioning)
};

export default function GradientRingLoader({
  size = 200,
  strokeWidth = 12,
  durationMs = 1200,
  color = "#4a2f4e",
  opacityEnd = 0,
  arc = 0.7,
  style,
}: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashArray = circumference;
  const dashLength = circumference * arc;

  // Reanimated rotation
  const rotation = useSharedValue(0);
  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: durationMs, easing: Easing.linear }),
      -1
    );
  }, [durationMs, rotation]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <Animated.View style={[{ width: size, height: size }, animatedStyle, style]}>
      <Svg width={size} height={size}>
        <Defs>
          {/* Gradient along the stroke: solid → transparent */}
          <LinearGradient id="fadeStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor={color} stopOpacity={1} />
            <Stop offset="100%" stopColor={color} stopOpacity={opacityEnd} />
          </LinearGradient>
        </Defs>

        {/* Background subtle ring (optional) */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeOpacity={0.12}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* The animated arc with gradient trail */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#fadeStroke)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          // Show only an arc segment of the full circle:
          strokeDasharray={`${dashArray}`}
          strokeDashoffset={circumference - dashLength}
          // Start the arc at the top (rotate the SVG path by -90deg)
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
    </Animated.View>
  );
}
