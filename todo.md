# Vietnamese content update

- [x] Rà soát toàn bộ text hiển thị trong `client/src/pages/Home.tsx`.
- [x] Việt hóa navigation, hero copy, destination labels, contribution section và modal About.
- [x] Cập nhật aria-label, title và microcopy tương tác sang tiếng Việt.
- [x] Chạy TypeScript/build và kiểm tra preview desktop/mobile.
- [x] Lưu checkpoint bản tiếng Việt để người dùng xem thử.

## Destination image and order update

- [x] Đưa Việt Nam lên đầu danh sách và làm điểm đến mặc định.
- [x] Hiển thị ảnh riêng cho Việt Nam và Nhật Bản trong danh sách điểm đến.
- [x] Kiểm tra chuyển đổi hero và responsive sau khi thay đổi thứ tự.
- [x] Lưu checkpoint bản cập nhật.

## Rollback request

- [x] Khôi phục dự án về checkpoint `c0f16da3`.
- [x] Kiểm tra preview và trạng thái dev server sau rollback.
- [x] Bàn giao kết quả rollback cho người dùng.

## Vietnamese typography fix

- [x] Rà soát letter-spacing, word-break, font và markup của các khối tiếng Việt.
- [x] Sửa tiêu đề “Ba miền đất, một atlas thong thả” và nhãn điểm đến không bị tách chữ.
- [x] Kiểm tra hero, cards và responsive mobile sau khi sửa typography.
- [x] Lưu checkpoint bản sửa lỗi.

## Country state synchronization

- [x] Đọc lại mapping dữ liệu và state chuyển country trong `Home.tsx`.
- [x] Đảm bảo hero, title, mô tả, ảnh, aside, caption, index và nút điều hướng dùng cùng một active country.
- [x] Kiểm thử chuyển Việt Nam → Trung Quốc → Nhật Bản → Việt Nam và các nút trước/sau.
- [x] Chạy check/build và lưu checkpoint bản sửa lỗi.

## Restore preferred typography

- [x] Đối chiếu font Cormorant Garamond ban đầu với cấu hình font hiện tại.
- [x] Khôi phục font chính và giữ fallback hỗ trợ tiếng Việt.
- [x] Kiểm tra hero, destination cards và responsive mobile.
- [x] Chạy build và lưu checkpoint mới.
