export function formatToKebabCase(input: string): string {
  return input
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

export function formatKebabToNormal(input: string): string {
  return input.split('-').join(' ');
}
