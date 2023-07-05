function telephoneFormat(telephone: string | undefined): string | undefined {
  return telephone
    ? telephone
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll(" ", "")
        .replaceAll("-", "")
    : undefined;
}

export { telephoneFormat };
