import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View, Text } from 'react-native';
import { theme } from '@/constants/theme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export function Input({ label, error, style, ...props }: InputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          error && styles.inputError,
          style,
        ]}
        placeholderTextColor={theme.colors.gray}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.sm,
  },
  label: {
    marginBottom: theme.spacing.xs,
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.black,
  },
  input: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.sm,
    fontSize: 16,
    color: theme.colors.black,
  },
  inputError: {
    borderColor: theme.colors.error,
  },
  error: {
    marginTop: theme.spacing.xs,
    fontSize: 12,
    color: theme.colors.error,
  },
});