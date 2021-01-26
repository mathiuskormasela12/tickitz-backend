-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 26, 2021 at 05:08 AM
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
  `poster` varchar(255) NOT NULL,
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
(23, 'CineOne 21', 'cine-1611234958107.png', 'Rose street 12', 20, 'Jakarta', '2021-01-21 13:15:58', '0000-00-00 00:00:00'),
(24, 'Hiflix', 'hiflix-1611325788047.png', 'Rose street 10', 20, 'Bandung', '2021-01-22 14:29:48', '0000-00-00 00:00:00');

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
(20, 'vampire', '2021-01-21 02:50:24', '0000-00-00 00:00:00');

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
(1, 'mathiuskormasela12@gmail.com', '2021-01-24 12:12:33', '0000-00-00 00:00:00');

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
  `poster` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `title`, `releaseDate`, `duration`, `category`, `direct`, `casts`, `synopsis`, `poster`, `createdAt`, `updatedAt`) VALUES
(118, 'Boruto: Naruto The Movie', '2020-10-21', '00:01:20', 'PG-18', 'Masashi Kishimoto', 'Boruto, Sarada, Mitsuki', 'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', 'boruto-1611624622306.jpg', '2021-01-26 01:30:22', '0000-00-00 00:00:00'),
(120, 'Boruto: Naruto the next generation', '2020-10-21', '00:01:20', 'PG-18', 'Masashi Kishimoto', 'Boruto, Sarada, Mitsuki', 'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', 'boruto-1611624726137.jpg', '2021-01-26 01:32:06', '0000-00-00 00:00:00'),
(122, 'The Guardsan', '2020-10-21', '00:01:20', 'PG-18', 'Mike Tyson', 'Mike, Jeanete, Alexa', 'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', 'guardians-1611624832340.jpg', '2021-01-26 01:33:52', '0000-00-00 00:00:00');

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
(196, 118, 12, '2021-01-26 01:30:22', '0000-00-00 00:00:00'),
(197, 118, 14, '2021-01-26 01:30:22', '0000-00-00 00:00:00'),
(198, 118, 15, '2021-01-26 01:30:22', '0000-00-00 00:00:00'),
(199, 118, 16, '2021-01-26 01:30:22', '0000-00-00 00:00:00'),
(204, 120, 12, '2021-01-26 01:32:06', '0000-00-00 00:00:00'),
(205, 120, 14, '2021-01-26 01:32:06', '0000-00-00 00:00:00'),
(206, 120, 15, '2021-01-26 01:32:06', '0000-00-00 00:00:00'),
(207, 120, 16, '2021-01-26 01:32:06', '0000-00-00 00:00:00'),
(212, 122, 12, '2021-01-26 01:33:52', '0000-00-00 00:00:00'),
(213, 122, 14, '2021-01-26 01:33:52', '0000-00-00 00:00:00'),
(214, 122, 15, '2021-01-26 01:33:52', '0000-00-00 00:00:00'),
(215, 122, 16, '2021-01-26 01:33:52', '0000-00-00 00:00:00');

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
(14, '2021-02-10', 8, 23, 118, '2021-01-26 01:30:22', '0000-00-00 00:00:00'),
(15, '2021-02-10', 8, 24, 120, '2021-01-26 01:32:06', '0000-00-00 00:00:00'),
(16, '2021-02-10', 3, 24, 122, '2021-01-26 01:33:52', '0000-00-00 00:00:00');

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
(163, 14, 'E1', '2021-01-26 03:34:06', '0000-00-00 00:00:00'),
(164, 14, 'F12', '2021-01-26 03:34:06', '0000-00-00 00:00:00'),
(165, 14, 'A2', '2021-01-26 03:34:06', '0000-00-00 00:00:00');

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
(1, '12:23:37', '2021-01-25 09:53:29', '0000-00-00 00:00:00'),
(2, '08:43:07', '2021-01-25 09:53:32', '2021-01-25 09:54:06'),
(3, '17:02:00', '2021-01-25 17:25:46', '0000-00-00 00:00:00'),
(4, '09:12:00', '2021-01-25 17:26:51', '0000-00-00 00:00:00'),
(5, '19:22:00', '2021-01-25 17:27:08', '0000-00-00 00:00:00'),
(7, '10:52:00', '2021-01-25 17:27:25', '0000-00-00 00:00:00'),
(8, '10:05:00', '2021-01-25 17:30:31', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `showTimeId` int(11) NOT NULL,
  `timeId` int(11) NOT NULL,
  `cinemaId` int(11) NOT NULL,
  `ticketCount` int(11) NOT NULL,
  `totalPayment` int(11) NOT NULL,
  `paymentMethod` varchar(50) NOT NULL,
  `seats` varchar(100) NOT NULL,
  `movieId` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `userId`, `showTimeId`, `timeId`, `cinemaId`, `ticketCount`, `totalPayment`, `paymentMethod`, `seats`, `movieId`, `createdAt`, `updatedAt`) VALUES
(83, 29, 14, 8, 23, 3, 60, 'ovo', 'E1, F12, A2', 118, '2021-01-26 03:34:06', '0000-00-00 00:00:00');

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
(24, NULL, NULL, 'mathiuskormasela12rpl@gmail.com', '$2a$08$RJI3XuOw2nVyRV/pg/bQiOHJu8t8NJES3z7SlJ6YMaeqTkL1pS//S', NULL, NULL, 'user', 1, '2021-01-23 11:18:02', '2021-01-23 11:24:36'),
(25, NULL, NULL, 'samdicova12@gmail.com', '$2a$08$4q0pmxWubhVJtXV9D2YCm.Mzp7MDzNKRSh79hPDCP8gaPs33o0Bda', NULL, NULL, 'user', 1, '2021-01-23 11:29:08', '2021-01-23 11:35:29'),
(28, NULL, NULL, 'admin@gmail.com', '$2a$08$BwC.iLehin9lt1kzDId0JelXL7vXwjOmjblAHN/.y4gBoIww.C7ue', NULL, NULL, 'admin', 1, '2021-01-24 02:26:17', '0000-00-00 00:00:00'),
(29, 'Tessalonika', 'Gracia', 'graciakormasela1002@gmail.com', '$2a$08$qZ5A20QE2aM/RG9lJLsNoOJEAK1UhPyeZC5FzxSom8ZuBkt.a44fG', NULL, '089273838', 'user', 1, '2021-01-24 02:31:12', '2021-01-25 14:54:01'),
(31, NULL, NULL, 'mathiuskormasela12@gmail.com', '$2a$08$3L5GM1v/b4zLu4IN6LpZZuQSKSgzwJX91xnBPMQBX11cnQTCv/hKu', NULL, NULL, 'user', 1, '2021-01-25 05:51:51', '2021-01-25 05:58:57');

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
  ADD KEY `userId` (`userId`),
  ADD KEY `cinemaId` (`cinemaId`),
  ADD KEY `movieId` (`movieId`),
  ADD KEY `timeId` (`timeId`),
  ADD KEY `showTimeId` (`showTimeId`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `loyalty_point`
--
ALTER TABLE `loyalty_point`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `moviegoers`
--
ALTER TABLE `moviegoers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT for table `moviesGenres`
--
ALTER TABLE `moviesGenres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=216;

--
-- AUTO_INCREMENT for table `show_times`
--
ALTER TABLE `show_times`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `soldSeats`
--
ALTER TABLE `soldSeats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=166;

--
-- AUTO_INCREMENT for table `times`
--
ALTER TABLE `times`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

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
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`cinemaId`) REFERENCES `cinemas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_ibfk_3` FOREIGN KEY (`movieId`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_ibfk_4` FOREIGN KEY (`timeId`) REFERENCES `times` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_ibfk_5` FOREIGN KEY (`showTimeId`) REFERENCES `show_times` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
