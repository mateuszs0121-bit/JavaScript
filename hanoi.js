function t(n, A, B, C) {
  if (n > 0) {
    t(n - 1, A, C, B);
    console.log(`Przenieś ${A} na ${C}`);
    t(n - 1, B, A, C);
  }
}

t(3, "A", "B", "C");
