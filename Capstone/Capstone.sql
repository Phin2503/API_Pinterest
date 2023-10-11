-- Adminer 4.8.1 MySQL 8.0.32 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

USE `Capstone`;

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(200) DEFAULT NULL,
  `image_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `comment_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `image_id` (`image_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `image` (`image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `comments` (`id`, `content`, `image_id`, `user_id`, `comment_date`) VALUES
(1,	'nfkafnakfknaf',	1,	1,	NULL);

DROP TABLE IF EXISTS `image`;
CREATE TABLE `image` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `name_img` varchar(100) DEFAULT NULL,
  `path` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `decs` varchar(100) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`image_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `image_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `image` (`image_id`, `name_img`, `path`, `decs`, `user_id`) VALUES
(1,	'Iron man',	'https://media1.popsugar-assets.com/files/thumbor/tS6c3oXAC7--Nm9XFJWzNWxGgFI/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/07/01/076/n/46207611/tmp_YF8Suz_217bdaf4519e21ea_MCDAVEN_EC254.jpg',	' iron man ngau vcl',	1),
(3,	'Tuandeptrai',	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlSh3FL1rNUB2k5DEF--xde7G8v80jstwuYoSkDC3K&s',	NULL,	1);

DROP TABLE IF EXISTS `save_image`;
CREATE TABLE `save_image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `save_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `image_id` (`image_id`),
  CONSTRAINT `save_image_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `save_image_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `image` (`image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `save_image` (`id`, `image_id`, `user_id`, `save_date`) VALUES
(1,	1,	1,	'2023-03-08');

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `users` (`user_id`, `email`, `password`, `full_name`, `age`, `avatar`) VALUES
(1,	'tpham01662@gmail.com',	'$2b$10$jmHrbaPA0S2uL652X3dWiOsi8wBSmO6aRQbPE7RP7yjbwGaNgBVMC',	'Minh Tuan Pham',	99,	'phin cham jpg'),
(2,	'tpham01663@gmail.com',	'$2b$10$BGuguYNpydMi6ehrP8vFHO7Imy5YGkyhA1M/CXlbmQXy/Wr93HLo6',	'Pham Minh Tu',	NULL,	NULL),
(3,	'tpham01664@gmail.com',	'$2b$10$M4.1oqT/K66gC2sCQhkiAuvJpFpE5THbz6ULNkpiyGoiqTmEnHWKu',	'Pham Minh Tuan3',	NULL,	NULL);

-- 2023-03-13 08:44:55
