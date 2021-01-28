-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 28, 2021 at 05:31 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tickitz-backend`
--

-- --------------------------------------------------------

--
-- Table structure for table `cinemas`
--

CREATE TABLE `cinemas` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `poster` varchar(255) DEFAULT NULL,
  `address` text NOT NULL,
  `pricePerSeat` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cinemas`
--

INSERT INTO `cinemas` (`id`, `name`, `poster`, `address`, `pricePerSeat`, `city`, `createdAt`, `updatedAt`) VALUES
(22, 'Ebv.id', 'ebv-1611233989959.png', 'Dwatt street no. 20', 20, 'Jakarta', '2021-01-21 12:59:49', '0000-00-00 00:00:00'),
(23, 'CineOne 21', 'cine-1611234958107.png', 'Rose street 12', 20, 'Surabaya', '2021-01-21 13:15:58', '2021-01-26 08:05:16'),
(24, 'Hiflix', 'hiflix-1611325788047.png', 'Rose street 10', 20, 'Bandung', '2021-01-22 14:29:48', '0000-00-00 00:00:00'),
(25, 'Hiflix 2', 'hiflix-1611677571513.png', 'Rose street 20', 209, 'Malang', '2021-01-26 16:12:51', '0000-00-00 00:00:00'),
(27, 'Hiflix 10', 'hiflix-1611769763994.png', 'Rose street 20', 209, 'ss', '2021-01-27 17:49:23', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(8, 'thriller', '2021-01-21 02:50:24', '0000-00-00 00:00:00'),
(10, 'drama', '2021-01-21 02:50:24', '0000-00-00 00:00:00'),
(12, 'sci-fi', '2021-01-21 02:50:24', '0000-00-00 00:00:00'),
(13, 'animation', '2021-01-21 02:50:24', '0000-00-00 00:00:00'),
(14, 'fantasy', '2021-01-21 02:50:24', '0000-00-00 00:00:00'),
(15, 'action', '2021-01-21 02:50:24', '0000-00-00 00:00:00'),
(16, 'adventure', '2021-01-21 02:50:24', '0000-00-00 00:00:00'),
(17, 'comedy', '2021-01-21 02:50:24', '0000-00-00 00:00:00'),
(18, 'horor', '2021-01-21 02:50:24', '0000-00-00 00:00:00'),
(19, 'romance', '2021-01-21 02:50:24', '0000-00-00 00:00:00'),
(20, 'vampire', '2021-01-21 02:50:24', '0000-00-00 00:00:00'),
(26, 'fiksi ilmiah', '2021-01-27 18:35:55', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `loyalty_point`
--

CREATE TABLE `loyalty_point` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `point` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `moviegoers`
--

CREATE TABLE `moviegoers` (
  `id` int(11) NOT NULL,
  `email` varchar(80) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `moviegoers`
--

INSERT INTO `moviegoers` (`id`, `email`, `createdAt`, `updatedAt`) VALUES
(2, 'mathiuskormasela12rpl@gmail.com', '2021-01-26 15:26:33', '0000-00-00 00:00:00'),
(3, 'mathiuskormasela12@gmail.com', '2021-01-27 17:20:32', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `releaseDate` date NOT NULL,
  `duration` time NOT NULL,
  `category` varchar(50) NOT NULL,
  `direct` text NOT NULL,
  `casts` text NOT NULL,
  `synopsis` text NOT NULL,
  `poster` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `title`, `releaseDate`, `duration`, `category`, `direct`, `casts`, `synopsis`, `poster`, `createdAt`, `updatedAt`) VALUES
(135, 'Boruto: Naruto The Next Generation', '2016-07-21', '01:35:00', 'PG-18', 'Masashi Kishimoto', 'Boruto, Sarada, Mitsuki, Naruto, Kakashi', 'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', 'boruto-1611663815464.jpg', '2021-01-26 12:23:35', '0000-00-00 00:00:00'),
(136, 'Naruto Shippudden', '2005-02-01', '00:24:10', 'PG-18', 'Masashi Kishimoto', 'Naruto, Kakashi', 'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', 'naruto-1611663916403.jpg', '2021-01-26 12:25:16', '0000-00-00 00:00:00'),
(138, 'Crash Landing On You', '2021-01-28', '01:20:10', 'PG-18', 'Lee Jeoong-Hyo', 'Hyun Bi, Seon Ye Jin', 'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', 'crush-1611678782052.jpeg', '2021-01-26 16:33:02', '2021-01-27 04:57:39'),
(140, 'My Love From The Star', '2021-01-27', '01:53:10', 'PG-18', 'Jang Tae-yoo', 'Kim So Hyun, Jun Ji Hyun', 'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', 'star-1611772915631.jpeg', '2021-01-27 18:41:55', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `moviesGenres`
--

CREATE TABLE `moviesGenres` (
  `id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `moviesGenres`
--

INSERT INTO `moviesGenres` (`id`, `movie_id`, `genre_id`, `createdAt`, `updatedAt`) VALUES
(264, 135, 13, '2021-01-26 12:23:35', '0000-00-00 00:00:00'),
(265, 135, 14, '2021-01-26 12:23:35', '0000-00-00 00:00:00'),
(266, 135, 15, '2021-01-26 12:23:35', '0000-00-00 00:00:00'),
(267, 136, 13, '2021-01-26 12:25:16', '0000-00-00 00:00:00'),
(268, 136, 14, '2021-01-26 12:25:16', '0000-00-00 00:00:00'),
(269, 136, 15, '2021-01-26 12:25:16', '0000-00-00 00:00:00'),
(273, 138, 10, '2021-01-26 16:33:02', '0000-00-00 00:00:00'),
(274, 138, 19, '2021-01-26 16:33:02', '0000-00-00 00:00:00'),
(275, 138, 17, '2021-01-26 16:33:02', '0000-00-00 00:00:00'),
(279, 140, 10, '2021-01-27 18:41:55', '0000-00-00 00:00:00'),
(280, 140, 17, '2021-01-27 18:41:55', '0000-00-00 00:00:00'),
(281, 140, 19, '2021-01-27 18:41:55', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `show_times`
--

CREATE TABLE `show_times` (
  `id` int(11) NOT NULL,
  `showTimeDate` date NOT NULL,
  `timeId` int(11) NOT NULL,
  `cinemaId` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updateAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `show_times`
--

INSERT INTO `show_times` (`id`, `showTimeDate`, `timeId`, `cinemaId`, `movieId`, `createdAt`, `updateAt`) VALUES
(22, '2021-10-04', 12, 24, 135, '2021-01-26 12:42:19', '0000-00-00 00:00:00'),
(23, '2021-10-04', 13, 24, 135, '2021-01-26 12:42:52', '0000-00-00 00:00:00'),
(24, '2021-10-04', 13, 22, 135, '2021-01-26 12:43:21', '0000-00-00 00:00:00'),
(25, '2021-10-04', 9, 22, 135, '2021-01-26 12:43:37', '0000-00-00 00:00:00'),
(26, '2021-03-14', 10, 23, 136, '2021-01-26 13:34:33', '0000-00-00 00:00:00'),
(27, '2021-01-30', 12, 22, 136, '2021-01-26 14:45:47', '0000-00-00 00:00:00'),
(28, '2021-08-17', 12, 22, 135, '2021-01-26 14:57:02', '0000-00-00 00:00:00'),
(31, '2021-08-07', 12, 22, 135, '2021-01-26 15:13:32', '0000-00-00 00:00:00'),
(32, '2022-01-17', 11, 22, 135, '2021-01-26 16:22:25', '0000-00-00 00:00:00'),
(33, '2022-01-17', 11, 22, 138, '2021-01-26 16:38:59', '0000-00-00 00:00:00'),
(34, '2021-12-07', 12, 23, 138, '2021-01-26 16:39:39', '0000-00-00 00:00:00'),
(38, '2021-07-27', 13, 22, 138, '2021-01-26 17:47:44', '0000-00-00 00:00:00'),
(41, '2021-08-10', 10, 22, 135, '2021-01-27 14:23:28', '0000-00-00 00:00:00'),
(42, '2021-02-10', 11, 23, 138, '2021-01-27 15:17:13', '0000-00-00 00:00:00'),
(43, '2021-02-10', 11, 23, 140, '2021-01-27 18:45:38', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `soldSeats`
--

CREATE TABLE `soldSeats` (
  `id` int(11) NOT NULL,
  `showTimeId` int(11) NOT NULL,
  `seatCode` char(3) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `soldSeats`
--

INSERT INTO `soldSeats` (`id`, `showTimeId`, `seatCode`, `createdAt`, `updatedAt`) VALUES
(231, 24, 'C2', '2021-01-26 13:14:14', '0000-00-00 00:00:00'),
(232, 24, 'G1', '2021-01-26 13:14:14', '0000-00-00 00:00:00'),
(233, 24, 'C1', '2021-01-26 13:14:14', '0000-00-00 00:00:00'),
(240, 22, 'C2', '2021-01-26 13:29:38', '0000-00-00 00:00:00'),
(241, 22, 'G1', '2021-01-26 13:29:38', '0000-00-00 00:00:00'),
(242, 22, 'C1', '2021-01-26 13:29:38', '0000-00-00 00:00:00'),
(243, 22, 'D2', '2021-01-26 13:29:38', '0000-00-00 00:00:00'),
(244, 26, 'C2', '2021-01-26 13:38:50', '0000-00-00 00:00:00'),
(245, 26, 'K1', '2021-01-26 13:38:50', '0000-00-00 00:00:00'),
(246, 26, 'C1', '2021-01-26 13:38:50', '0000-00-00 00:00:00'),
(247, 26, 'D2', '2021-01-26 13:38:50', '0000-00-00 00:00:00'),
(248, 27, 'C2', '2021-01-26 14:48:30', '0000-00-00 00:00:00'),
(249, 27, 'K1', '2021-01-26 14:48:30', '0000-00-00 00:00:00'),
(250, 27, 'C1', '2021-01-26 14:48:30', '0000-00-00 00:00:00'),
(251, 27, 'D2', '2021-01-26 14:48:30', '0000-00-00 00:00:00'),
(252, 28, 'C2', '2021-01-26 14:59:53', '0000-00-00 00:00:00'),
(253, 28, 'K1', '2021-01-26 14:59:53', '0000-00-00 00:00:00'),
(254, 28, 'C1', '2021-01-26 14:59:53', '0000-00-00 00:00:00'),
(255, 28, 'D2', '2021-01-26 14:59:53', '0000-00-00 00:00:00'),
(256, 31, 'C2', '2021-01-26 15:15:00', '0000-00-00 00:00:00'),
(257, 31, 'K1', '2021-01-26 15:15:00', '0000-00-00 00:00:00'),
(258, 31, 'C1', '2021-01-26 15:15:00', '0000-00-00 00:00:00'),
(259, 31, 'D2', '2021-01-26 15:15:00', '0000-00-00 00:00:00'),
(263, 34, 'A14', '2021-01-26 17:13:32', '0000-00-00 00:00:00'),
(264, 34, 'A11', '2021-01-26 17:13:32', '0000-00-00 00:00:00'),
(267, 43, 'D14', '2021-01-27 18:54:08', '0000-00-00 00:00:00'),
(268, 43, 'F11', '2021-01-27 18:54:08', '0000-00-00 00:00:00'),
(269, 43, 'C14', '2021-01-28 03:14:36', '0000-00-00 00:00:00'),
(270, 43, 'A11', '2021-01-28 03:14:36', '0000-00-00 00:00:00'),
(271, 43, 'F10', '2021-01-28 03:14:36', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `times`
--

CREATE TABLE `times` (
  `id` int(11) NOT NULL,
  `showTime` time NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `times`
--

INSERT INTO `times` (`id`, `showTime`, `createdAt`, `updatedAt`) VALUES
(9, '10:05:00', '2021-01-26 05:21:25', '0000-00-00 00:00:00'),
(10, '20:00:00', '2021-01-26 05:21:43', '0000-00-00 00:00:00'),
(11, '10:30:00', '2021-01-26 05:22:05', '0000-00-00 00:00:00'),
(12, '15:30:00', '2021-01-26 05:22:14', '0000-00-00 00:00:00'),
(13, '16:20:08', '2021-01-26 05:22:21', '0000-00-00 00:00:00'),
(14, '12:45:03', '2021-01-26 16:23:29', '0000-00-00 00:00:00'),
(15, '17:15:03', '2021-01-27 18:45:11', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `showTimeDate` date NOT NULL,
  `ticketTime` time NOT NULL,
  `cinemaName` varchar(100) NOT NULL,
  `cinemaPoster` varchar(255) NOT NULL,
  `cinemaCity` varchar(100) NOT NULL,
  `ticketCount` int(11) NOT NULL,
  `totalPayment` int(11) NOT NULL,
  `paymentMethod` varchar(50) NOT NULL,
  `seats` varchar(100) NOT NULL,
  `movieTitle` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `userId`, `showTimeDate`, `ticketTime`, `cinemaName`, `cinemaPoster`, `cinemaCity`, `ticketCount`, `totalPayment`, `paymentMethod`, `seats`, `movieTitle`, `createdAt`, `updatedAt`) VALUES
(127, 29, '2021-10-04', '16:20:08', 'Ebv.id', 'ebv-1611233989959.png', 'Jakarta', 10, 60, 'ovo', 'C2, G1, C1', 'Boruto: Naruto The Next Generation', '2021-01-26 13:14:14', '0000-00-00 00:00:00'),
(132, 29, '2021-10-04', '16:20:08', 'Hiflix', 'hiflix-1611325788047.png', 'Bandung', 14, 60, 'ovo', 'C2, G1, C1, D2', 'Boruto: Naruto The Next Generation', '2021-01-26 13:29:38', '0000-00-00 00:00:00'),
(136, 29, '2021-03-14', '20:00:00', 'CineOne 32', 'cine-1611234958107.png', 'Surabaya', 14, 60, 'ovo', 'C2, K1, C1, D2', 'Boruto: Naruto The Next Generation', '2021-01-26 13:38:50', '2021-01-26 13:39:39'),
(141, 29, '2021-01-30', '15:30:00', 'Ebv.id', 'ebv-1611233989959.png', 'Jakarta', 14, 60, 'ovo', 'C2, K1, C1, D2', 'Boruto: Naruto The Next Generation', '2021-01-26 14:48:30', '0000-00-00 00:00:00'),
(144, 29, '2021-01-30', '15:30:00', 'Ebv.id', 'ebv-1611233989959.png', 'Jakarta', 4, 60, 'ovo', 'C2, K1, C1, D2', 'Boruto: Naruto The Next Generation', '2021-01-26 14:59:53', '0000-00-00 00:00:00'),
(147, 29, '2021-08-07', '15:30:00', 'Ebv.id', 'ebv-1611233989959.png', 'Jakarta', 4, 60, 'ovo', 'C2, K1, C1, D2', 'Boruto: Naruto The Next Generation', '2021-01-26 15:15:00', '0000-00-00 00:00:00'),
(148, 29, '2021-12-07', '15:30:00', 'Hiflix', 'hiflix-1611325788047.png', 'Banding', 3, 60, 'ovo', 'A2, A1, C3', 'Start-Up', '2021-01-26 16:49:21', '0000-00-00 00:00:00'),
(154, 28, '2021-07-27', '20:00:00', 'cibe onw', 'ebv-1611233989959.png', 'Jakarta', 2, 60, 'ovo', 'D14, F11', 'My Love From The Star', '2021-01-27 18:54:08', '0000-00-00 00:00:00'),
(159, 28, '2021-07-27', '20:00:00', 'cibe onw', 'ebv-1611233989959.png', 'Jakarta', 3, 60, 'ovo', 'C14, A11, F10', 'My Love From The Star', '2021-01-28 03:14:36', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(80) DEFAULT NULL,
  `last_name` varchar(80) DEFAULT NULL,
  `email` varchar(80) NOT NULL,
  `password` varchar(255) NOT NULL,
  `poster` varchar(255) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `role` varchar(80) NOT NULL,
  `activated` tinyint(1) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `poster`, `phone`, `role`, `activated`, `createdAt`, `updatedAt`) VALUES
(10, NULL, NULL, 'samdicova@gmail.com', '$2a$08$A7WAiV9eVZN8MRqEFjqHYuHBYkGyWjSZcnxccuWdcZqHVmFVoyTwW', NULL, NULL, 'admin', 1, '2021-01-23 04:43:41', '2021-01-23 14:06:37'),
(28, NULL, NULL, 'admin@gmail.com', '$2a$08$BwC.iLehin9lt1kzDId0JelXL7vXwjOmjblAHN/.y4gBoIww.C7ue', NULL, NULL, 'admin', 1, '2021-01-24 02:26:17', '0000-00-00 00:00:00'),
(29, 'Tessalonika', 'Gracia', 'graciakormasela1002@gmail.com', '$2a$08$qZ5A20QE2aM/RG9lJLsNoOJEAK1UhPyeZC5FzxSom8ZuBkt.a44fG', NULL, '089273838', 'user', 1, '2021-01-24 02:31:12', '2021-01-25 14:54:01'),
(35, NULL, NULL, 'superuser@gmail.com', '$2a$08$buLxrGJpGEQQmhVsJK8AfejHp2DFuI3OPuc91qRXMiNdo20mddxH2', NULL, NULL, 'admin', 1, '2021-01-27 17:35:02', '0000-00-00 00:00:00'),
(36, 'Matthew', 'Kormasela', 'mathiuskormasela12@gmail.com', '$2a$08$R7KpYybrG9rZj0ScCO1DQeXz9OlBDhT/pTMbfxfEmH/ON4ioFeHwC', 'mysmtp-1611769493639.png', '0895326176440', 'user', 1, '2021-01-27 17:36:34', '2021-01-27 17:44:53'),
(37, NULL, NULL, 'admin2@gmail.com', '$2a$08$3a9fHzeCfdALmWY5Ns9Y1OIDuzjbMjEWiIQ/y9HnwBQ.YJXNZnKvG', NULL, NULL, 'admin', 1, '2021-01-28 03:57:24', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cinemas`
--
ALTER TABLE `cinemas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `loyalty_point`
--
ALTER TABLE `loyalty_point`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `moviegoers`
--
ALTER TABLE `moviegoers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `moviesGenres`
--
ALTER TABLE `moviesGenres`
  ADD PRIMARY KEY (`id`),
  ADD KEY `movie_id` (`movie_id`),
  ADD KEY `genre_id` (`genre_id`);

--
-- Indexes for table `show_times`
--
ALTER TABLE `show_times`
  ADD PRIMARY KEY (`id`),
  ADD KEY `timeId` (`timeId`),
  ADD KEY `cinemaId` (`cinemaId`),
  ADD KEY `movieId` (`movieId`);

--
-- Indexes for table `soldSeats`
--
ALTER TABLE `soldSeats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `showTimeId` (`showTimeId`);

--
-- Indexes for table `times`
--
ALTER TABLE `times`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cinemas`
--
ALTER TABLE `cinemas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `loyalty_point`
--
ALTER TABLE `loyalty_point`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `moviegoers`
--
ALTER TABLE `moviegoers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=142;

--
-- AUTO_INCREMENT for table `moviesGenres`
--
ALTER TABLE `moviesGenres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=285;

--
-- AUTO_INCREMENT for table `show_times`
--
ALTER TABLE `show_times`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `soldSeats`
--
ALTER TABLE `soldSeats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=272;

--
-- AUTO_INCREMENT for table `times`
--
ALTER TABLE `times`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=162;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `loyalty_point`
--
ALTER TABLE `loyalty_point`
  ADD CONSTRAINT `loyalty_point_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `moviesGenres`
--
ALTER TABLE `moviesGenres`
  ADD CONSTRAINT `moviesGenres_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `moviesGenres_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `show_times`
--
ALTER TABLE `show_times`
  ADD CONSTRAINT `show_times_ibfk_1` FOREIGN KEY (`timeId`) REFERENCES `times` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `show_times_ibfk_2` FOREIGN KEY (`cinemaId`) REFERENCES `cinemas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `show_times_ibfk_3` FOREIGN KEY (`movieId`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `soldSeats`
--
ALTER TABLE `soldSeats`
  ADD CONSTRAINT `soldSeats_ibfk_1` FOREIGN KEY (`showTimeId`) REFERENCES `show_times` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
