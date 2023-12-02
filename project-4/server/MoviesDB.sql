-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2023 at 10:34 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moviesdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `ID` int(11) NOT NULL,
  `Title` varchar(100) NOT NULL,
  `AgeRating` varchar(10) NOT NULL,
  `Summary` varchar(1000) NOT NULL,
  `AudienceRating` varchar(5) NOT NULL,
  `ImageURL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`ID`, `Title`, `AgeRating`, `Summary`, `AudienceRating`, `ImageURL`) VALUES
(1, 'The Hunger Game: The Ballad of Songbirds & Snakes', 'PG-13', 'Years before he becomes the tyrannical president of Panem, 18-year-old Coriolanus Snow remains the last hope for his fading lineage. With the 10th annual Hunger Games fast approaching, the young Snow becomes alarmed when he\'s assigned to mentor Lucy Gray Baird from District 12. Uniting their instincts for showmanship and political savvy, they race against time to ultimately reveal who\'s a songbird and who\'s a snake.', '89%', 'http://localhost/projects/Project4Server/images/Hunger%20Games.jpg'),
(2, 'Fight Club', 'R', 'A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler\'s attention.', '96', 'http://localhost/projects/Project4Server/images/Fight%20Club.jpg'),
(3, 'Elemental', 'PG', 'In a city where fire, water, land, and air residents live together, a fiery young woman and a go-with-the-flow guy discover something elemental: how much they actually have in common.', '93', 'http://localhost/projects/Project4Server/images/Elemental.jpg'),
(4, 'Monsters, Inc.', 'G', 'Monsters Incorporated is the largest scare factory in the monster world, and James P. Sullivan (John Goodman) is one of its top scarers. Sullivan is a huge, intimidating monster with blue fur, large purple spots and horns. His scare assistant, best friend and roommate is Mike Wazowski (Billy Crystal), a green, opinionated, feisty little one-eyed monster. Visiting from the human world is Boo (Mary Gibbs), a tiny girl who goes where no human has ever gone before.', '90', 'http://localhost/projects/Project4Server/images/Monsters%20Inc.jpg'),
(5, 'Mean Girls', 'PG-13', 'Teenage Cady Heron (Lindsay Lohan) was educated in Africa by her scientist parents. When her family moves to the suburbs of Illinois, Cady finally gets to experience public school and gets a quick primer on the cruel, tacit laws of popularity that divide her fellow students into tightly knit cliques. She unwittingly finds herself in the good graces of an elite group of cool students dubbed \"the Plastics,\" but Cady soon realizes how her shallow group of new friends earned this nickname.', '66', 'http://localhost/projects/Project4Server/images/Mean%20Girls.jpg'),
(6, 'Spider-Man: Across the Spider-Verse', 'PG', 'After reuniting with Gwen Stacy, Brooklyn\'s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. However, when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders. He must soon redefine what it means to be a hero so he can save the people he loves most.', '94', 'http://localhost/projects/Project4Server/images/Spiderman.jpg'),
(7, 'Parasite', 'R', 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.', '90', 'http://localhost/projects/Project4Server/images/Parasite.jpg'),
(8, 'Love Actually', 'R', 'Nine intertwined stories examine the complexities of the one emotion that connects us all: love.', '72', 'http://localhost/projects/Project4Server/images/Love%20Actually.jpg'),
(9, 'Train to Busan', '', 'A man (Gong Yoo), his estranged daughter and other passengers become trapped on a speeding train during a zombie outbreak in South Korea.', '89', 'http://localhost/projects/Project4Server/images/Train%20to%20Busan.jpg'),
(10, 'Cats', 'PG', 'A tribe of cats compete during the annual Jellicle Ball, where one lucky feline will be chosen to ascend to the Heaviside Layer and be granted a new life.', '53', 'http://localhost/projects/Project4Server/images/Cats.jpg'),
(11, 'The Matrix', 'R', 'Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life.', '85', 'http://localhost/projects/Project4Server/images/The%20Matrix.jpg'),
(12, 'Harry Potter and the Sorcerer\'s Stone', 'PG', 'Adaptation of the first of J.K. Rowling\'s popular children\'s novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents\' mysterious deaths.', '82', 'http://localhost/projects/Project4Server/images/Harry%20Potter.jpg'),
(13, 'Harry Potter and the Chamber of Secrets', 'PG', 'The second instalment of boy wizard Harry Potter\'s adventures at Hogwarts School of Witchcraft and Wizardry, based on the novel by JK Rowling. A mysterious elf tells Harry to expect trouble during his second year at Hogwarts, but nothing can prepare him for trees that fight back, flying cars, spiders that talk and deadly warnings written in blood on the walls of the school.', '80', 'http://localhost/projects/Project4Server/images/Harry%20Potter%202.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
