-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 19 Jan 2021 pada 13.07
-- Versi server: 10.4.17-MariaDB
-- Versi PHP: 8.0.0

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
  `city` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `cinemas`
--

INSERT INTO `cinemas` (`id`, `name`, `poster`, `address`, `pricePerSeat`, `city`) VALUES
(5, 'Ebv.id', 'ebu-1610980307072.png', 'Whatever street No.12, South Purwokerto', 50, 'Banjarmasin'),
(6, 'CineOne 21', 'cine-1610980534533.png', 'Whatever street No.12, South Purwokerto', 520, 'Kota Tua');

-- --------------------------------------------------------

--
-- Struktur dari tabel `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(8, 'thriller'),
(10, 'drama'),
(12, 'sci-fi'),
(13, 'animation'),
(14, 'fantasy'),
(15, 'action'),
(16, 'adventure');

-- --------------------------------------------------------

--
-- Struktur dari tabel `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `releaseDate` date NOT NULL,
  `duration` int(11) NOT NULL,
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

INSERT INTO `movies` (`id`, `title`, `releaseDate`, `duration`, `direct`, `casts`, `synopsis`, `poster`, `createdAt`, `updatedAt`) VALUES
(1, 'adventure', '2021-01-18', 128, 'Baron', 'Taylor, Ryan, Kian', 'wkwkwkwkwkkw', 'erd-1610985178684.png', '2021-01-18 15:52:58', '0000-00-00 00:00:00'),
(2, 'Naruto Shippuden', '1999-10-28', 180, 'Masashi Kishimoto', 'Taylor, Ryan, Kian', 'Shinobi', 'erd-1610985350073.png', '2021-01-18 15:55:50', '0000-00-00 00:00:00'),
(3, 'Cinta diatas sepotong chatting', '2001-09-22', 120, 'Raditya Dika', 'Dika, Radit', 'kisah cinta raditya dhika', '2-1610986422889.png', '2021-01-18 16:13:42', '0000-00-00 00:00:00'),
(4, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986782217.jpg', '2021-01-18 16:19:42', '0000-00-00 00:00:00'),
(5, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 120, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610987107283.jpg', '2021-01-18 16:20:11', '2021-01-18 16:25:07'),
(7, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986826416.jpg', '2021-01-18 16:20:26', '0000-00-00 00:00:00'),
(8, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986826453.jpg', '2021-01-18 16:20:26', '0000-00-00 00:00:00'),
(9, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986826998.jpg', '2021-01-18 16:20:27', '0000-00-00 00:00:00'),
(10, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986827380.jpg', '2021-01-18 16:20:27', '0000-00-00 00:00:00'),
(11, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986827425.jpg', '2021-01-18 16:20:27', '0000-00-00 00:00:00'),
(12, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986827457.jpg', '2021-01-18 16:20:27', '0000-00-00 00:00:00'),
(13, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986828415.jpg', '2021-01-18 16:20:28', '0000-00-00 00:00:00'),
(14, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986828542.jpg', '2021-01-18 16:20:28', '0000-00-00 00:00:00'),
(15, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986828805.jpg', '2021-01-18 16:20:28', '0000-00-00 00:00:00'),
(16, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986828832.jpg', '2021-01-18 16:20:28', '0000-00-00 00:00:00'),
(17, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986828850.jpg', '2021-01-18 16:20:28', '0000-00-00 00:00:00'),
(18, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986829523.jpg', '2021-01-18 16:20:29', '0000-00-00 00:00:00'),
(19, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986829589.jpg', '2021-01-18 16:20:29', '0000-00-00 00:00:00'),
(20, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986829791.jpg', '2021-01-18 16:20:29', '0000-00-00 00:00:00'),
(21, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986830156.jpg', '2021-01-18 16:20:30', '0000-00-00 00:00:00'),
(22, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986830203.jpg', '2021-01-18 16:20:30', '0000-00-00 00:00:00'),
(23, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986830255.jpg', '2021-01-18 16:20:30', '0000-00-00 00:00:00'),
(24, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986830941.jpg', '2021-01-18 16:20:30', '0000-00-00 00:00:00'),
(25, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986831006.jpg', '2021-01-18 16:20:31', '0000-00-00 00:00:00'),
(26, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986831011.jpg', '2021-01-18 16:20:31', '0000-00-00 00:00:00'),
(27, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986831206.jpg', '2021-01-18 16:20:31', '0000-00-00 00:00:00'),
(28, 'Guardians of the Galaxy Vol. 2', '2017-05-05', 136, 'James Gunn', 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel', 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord\'s encounter with his father the ambitious celestial being Ego.', 'goto-1610986831571.jpg', '2021-01-18 16:20:31', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `moviesGenres`
--

CREATE TABLE `moviesGenres` (
  `id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `cinemas`
--
ALTER TABLE `cinemas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT untuk tabel `moviesGenres`
--
ALTER TABLE `moviesGenres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `moviesGenres`
--
ALTER TABLE `moviesGenres`
  ADD CONSTRAINT `moviesGenres_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `moviesGenres_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
