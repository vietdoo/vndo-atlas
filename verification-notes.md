# Country state verification

Preview verification completed on 2026-08-14:

- Default state: Việt Nam; hero image, title, description, caption `Việt Nam / 01`, and adjacent buttons are coherent.
- Next transition: Việt Nam → Trung Quốc; hero image, title, description, caption `Trung Quốc / 02`, and adjacent buttons are coherent.
- Next transition: Trung Quốc → Nhật Bản; hero image, title, description, caption `Nhật Bản / 03`, and adjacent buttons are coherent.
- Loop transition: Nhật Bản → Việt Nam; hero image, title, description, caption `Việt Nam / 01`, and adjacent buttons return coherently.
- The hero is keyed by the active country, so a country switch remounts the visual scene instead of retaining the previous image node.
- Direct card selection: clicking the Nhật Bản card navigates to `#home` and produces the matching Japan image, title, description, caption `Nhật Bản / 03`, and adjacent labels.
