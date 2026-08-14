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

## Japan visual refresh

- [x] Tạo asset Nhật Bản mới cùng chất liệu giấy cổ/editorial với Việt Nam và Trung Quốc.
- [x] Thay asset ở data country để hero và destination card dùng cùng một ảnh mới.
- [x] Kiểm tra state Nhật Bản trên desktop/mobile và build.
- [x] Lưu checkpoint bản cập nhật hình ảnh.

## Ten-country expansion

Phạm vi đề xuất: Thái Lan, Hàn Quốc, Campuchia, Lào, Indonesia, Malaysia, Singapore, Ấn Độ, Sri Lanka và Nepal.

- [x] Nghiên cứu motif kiến trúc/văn hóa và kiểm tra nguồn tham chiếu cho 10 quốc gia.
- [x] Viết copy tiếng Việt và data contract thống nhất cho 13 quốc gia.
- [x] Tạo 10 asset collage editorial mới theo cùng visual system.
- [x] Refactor state/navigation để hỗ trợ 13 country state không lệch nội dung.
- [x] Kiểm thử chuyển vòng, card trực tiếp, desktop/mobile và production build.
- [x] Lưu checkpoint bản mở rộng 10 quốc gia.

## Editorial asset consistency refresh

- [x] Rà soát 5 ảnh Singapore, Malaysia, Ấn Độ, Sri Lanka và Nepal đang dùng ảnh tham chiếu ngoài style collage.
- [ ] Tạo 5 collage mới cùng chất liệu giấy cổ, palette đất và xử lý minh họa với bộ asset hiện tại.
- [ ] Thay URL asset trong `destinations.ts` để hero/card dùng đúng ảnh mới.
- [ ] Kiểm tra state, responsive, build và lưu checkpoint.

## Vietnamese text and VNDO identity refresh

- [x] Quét toàn bộ source, metadata, aria-label và UI để tìm chữ Hán/tiếng Trung còn sót.
- [x] Viết lại các đoạn copy còn cần tinh chỉnh theo tiếng Việt editorial tự nhiên, nhất quán.
- [x] Chọn và áp dụng tên site mới có chữ VNDO, bao gồm brand, title, description và microcopy.
- [x] Tạo/cập nhật icon nhận diện VNDO và favicon theo phong cách dấu triện/atlas giấy cổ.
- [x] Kiểm tra state 13 điểm đến, responsive, build và lưu checkpoint mới.

## GitHub repository export

- [x] Kiểm tra trạng thái Git hiện tại và các file cần loại khỏi commit.
- [x] Tạo repository GitHub private mới tên `vndo-atlas`.
- [x] Commit toàn bộ source hiện tại và push branch chính lên remote mới.
- [x] Xác minh remote URL, branch và commit đầu tiên trên GitHub.

## README and deployment documentation

- [ ] Soạn README tiếng Việt/English rõ ràng cho repository `vndo-atlas`.
- [ ] Ghi hướng dẫn cài đặt, chạy local, check, build và preview production.
- [ ] Ghi hướng dẫn deploy lên Vercel bằng GitHub và Vercel CLI.
- [ ] Kiểm tra các lệnh trong README và push tài liệu lên GitHub.

## Vercel repository-local assets

- [x] Kiểm kê toàn bộ tham chiếu `/manus-storage/` và asset nguồn hiện có.
- [x] Copy/tối ưu ảnh collage và favicon vào thư mục public của repository.
- [x] Cập nhật data, metadata và README để dùng asset local trên Vercel.
- [x] Kiểm tra build, kích thước asset, serving local và push thay đổi lên GitHub.

## Professional English README refresh

- [x] Rewrite the README fully in professional English with clear project positioning.
- [x] Document setup, scripts, architecture, local assets, environment variables and Vercel deployment.
- [x] Validate Markdown structure, commands and repository links.
- [x] Commit and push the documentation update to GitHub.
