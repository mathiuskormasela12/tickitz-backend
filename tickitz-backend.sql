-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 22 Jan 2021 pada 16.49
-- Versi server: 10.4.17-MariaDB
-- Versi PHP: 8.0.1

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
-- Struktur dari tabel `cinemas`
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
-- Dumping data untuk tabel `cinemas`
--

INSERT INTO `cinemas` (`id`, `name`, `poster`, `address`, `pricePerSeat`, `city`, `createdAt`, `updatedAt`) VALUES
(22, 'Ebv.id', 'ebv-1611233989959.png', 'Dwatt street no. 20', 20, 'Jakarta', '2021-01-21 12:59:49', '0000-00-00 00:00:00'),
(23, 'CineOne 21', 'cine-1611234958107.png', 'Rose street 12', 20, 'Jakarta', '2021-01-21 13:15:58', '0000-00-00 00:00:00'),
(24, 'Hiflix', 'hiflix-1611325788047.png', 'Rose street 10', 20, 'Bandung', '2021-01-22 14:29:48', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `genres`
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
-- Struktur dari tabel `loyalty_point`
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
-- Struktur dari tabel `moviegoers`
--

CREATE TABLE `moviegoers` (
  `id` int(11) NOT NULL,
  `email` varchar(80) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `movies`
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
-- Dumping data untuk tabel `movies`
--

INSERT INTO `movies` (`id`, `title`, `releaseDate`, `duration`, `category`, `direct`, `casts`, `synopsis`, `poster`, `createdAt`, `updatedAt`) VALUES
(90, 'The Guardians  200', '2011-07-21', '00:01:24', 'PG-18', 'Max', 'Mike, Max, Andrew', 'after war', 'guardians-1611326386709.jpg', '2021-01-22 14:39:46', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `moviesGenres`
--

CREATE TABLE `moviesGenres` (
  `id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `moviesGenres`
--

INSERT INTO `moviesGenres` (`id`, `movie_id`, `genre_id`, `createdAt`, `updatedAt`) VALUES
(97, 90, 15, '2021-01-22 14:39:46', '0000-00-00 00:00:00'),
(98, 90, 12, '2021-01-22 14:39:46', '0000-00-00 00:00:00'),
(99, 90, 14, '2021-01-22 14:39:46', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `show_times`
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

-- --------------------------------------------------------

--
-- Struktur dari tabel `times`
--

CREATE TABLE `times` (
  `id` int(11) NOT NULL,
  `showTime` time NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `ticketDate` date NOT NULL,
  `ticketTime` time NOT NULL,
  `cinemaName` varchar(100) NOT NULL,
  `ticketCount` int(11) NOT NULL,
  `totalPayment` int(11) NOT NULL,
  `paymentMethod` varchar(50) NOT NULL,
  `seats` varchar(100) NOT NULL,
  `movieTitle` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
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
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `poster`, `phone`, `role`, `createdAt`, `updatedAt`) VALUES
(3, NULL, NULL, 'mathiuskorasela12@higo.id', '$2a$08$swsY7vLBfjf1zORU1NXqVeAJ4sPdjhRnvIxaFL5zQs13otCOkv19q', NULL, NULL, 'admin', '2021-01-22 13:53:11', '0000-00-00 00:00:00'),
(4, NULL, NULL, 'kiko@gmail.com', '$2a$08$rihmxxMAbn8aAu0Eehvi2uY1rrtpQSRqUbmNZ2y0kwJdFiH0tz5z6', NULL, NULL, 'user', '2021-01-22 13:59:09', '0000-00-00 00:00:00'),
(5, NULL, NULL, 'arkademy@gmail.com', '$2a$08$4BsjgKCrKfjIwlOpsWqBleToAGtJSvu1zlAYnnsTBqpDkFiWc37Mi', NULL, NULL, 'user', '2021-01-22 14:08:40', '0000-00-00 00:00:00'),
(6, NULL, NULL, 'naruto@gmail.com', '$2a$08$gZrpVM4JEeisA07Zv843nO8e2hbCPzUDUap/8A5FCqwy3h6SKa2Qa', NULL, NULL, 'admin', '2021-01-22 14:19:25', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `cinemas`
--
ALTER TABLE `cinemas`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `loyalty_point`
--
ALTER TABLE `loyalty_point`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `moviegoers`
--
ALTER TABLE `moviegoers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indeks untuk tabel `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `moviesGenres`
--
ALTER TABLE `moviesGenres`
  ADD PRIMARY KEY (`id`),
  ADD KEY `movie_id` (`movie_id`),
  ADD KEY `genre_id` (`genre_id`);

--
-- Indeks untuk tabel `show_times`
--
ALTER TABLE `show_times`
  ADD PRIMARY KEY (`id`),
  ADD KEY `timeId` (`timeId`),
  ADD KEY `cinemaId` (`cinemaId`),
  ADD KEY `movieId` (`movieId`);

--
-- Indeks untuk tabel `times`
--
ALTER TABLE `times`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `cinemas`
--
ALTER TABLE `cinemas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT untuk tabel `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT untuk tabel `loyalty_point`
--
ALTER TABLE `loyalty_point`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `moviegoers`
--
ALTER TABLE `moviegoers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT untuk tabel `moviesGenres`
--
ALTER TABLE `moviesGenres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT untuk tabel `show_times`
--
ALTER TABLE `show_times`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `times`
--
ALTER TABLE `times`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `loyalty_point`
--
ALTER TABLE `loyalty_point`
  ADD CONSTRAINT `loyalty_point_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `moviesGenres`
--
ALTER TABLE `moviesGenres`
  ADD CONSTRAINT `moviesGenres_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `moviesGenres_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `show_times`
--
ALTER TABLE `show_times`
  ADD CONSTRAINT `show_times_ibfk_1` FOREIGN KEY (`timeId`) REFERENCES `times` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `show_times_ibfk_2` FOREIGN KEY (`cinemaId`) REFERENCES `cinemas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `show_times_ibfk_3` FOREIGN KEY (`movieId`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
