function telephoneFormat(telephone: string | null): string | null {
  return telephone
    ? telephone // (17) 99752-6260
        .replaceAll("(", "") // 17) 99752-6260
        .replaceAll(")", "") // 17 99752-6260
        .replaceAll(" ", "") // 1799752-6260
        .replaceAll("-", "") // 17997526260
    : null;
}

export { telephoneFormat };
