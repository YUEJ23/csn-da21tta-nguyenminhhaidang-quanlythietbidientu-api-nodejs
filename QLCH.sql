create database QLCH;
Use QLCH;
create table sanpham (
masp int auto_increment primary key,
tensp varchar(255) not null,
mota text,
gia decimal(10, 2),
soluong int
);
select * from sanpham;
create table nhacungcap (
ma_nhacungcap int auto_increment primary key,
ten_nhacungcap varchar(255) not null,
diachi varchar (255),
sodienthoai varchar(255)
)
select * from nhacungcap;














