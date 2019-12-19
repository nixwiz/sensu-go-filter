describe("sample_filter", function() {
  it("returns true when occurrences equals 1", function() {
      var event = {
        "entity": {
          "namespace": "default"
        },
        "check": {
          "occurrences": 1,
          "occurrences_watermark": 1
        },
        "is_resolution": false
      }
      expect(sample_filter(event, 1)).toBe(true);
  });

  it("returns false when occurrences does not equal 1", function() {
    var event = {
      "entity": {
        "namespace": "default"
      },
      "check": {
        "occurrences": 4,
        "occurrences_watermark": 4
      },
      "is_resolution": false
    }
    expect(sample_filter(event, 1)).toBe(false);
  });
});
