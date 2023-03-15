process.stdin.on('data', input => {
  const text = input.toString();
  process.stdout.write(text.toUpperCase());
});