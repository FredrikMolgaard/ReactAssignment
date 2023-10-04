import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from './globalStyles';

interface ProgressBarProps {
  total: number;
  completed: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  total,
  completed,
  color,
}) => {
  const progress = total > 0 ? completed / total : 0;

  return (
    <View style={globalStyles.progressBarContainer}>
      <View
        style={[
          globalStyles.progressBar,
          { width: `${Math.round(progress * 100)}%`, backgroundColor: color },
        ]}
      />
      <Text style={globalStyles.progressText}>
        {Math.round(progress * 100)}% Completed
      </Text>
    </View>
  );
};

export default ProgressBar;
