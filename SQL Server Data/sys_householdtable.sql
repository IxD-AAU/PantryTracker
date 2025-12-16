CREATE DATABASE  IF NOT EXISTS `sys` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sys`;
-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: sys
-- ------------------------------------------------------
-- Server version	9.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `householdtable`
--

DROP TABLE IF EXISTS `householdtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `householdtable` (
  `UHID` int NOT NULL AUTO_INCREMENT,
  `displayName` varchar(75) NOT NULL,
  `inviteCode` varchar(8) NOT NULL,
  `HouseHoldMember1` int NOT NULL,
  `HouseHoldMember2` int DEFAULT NULL,
  `HouseHoldMember3` int DEFAULT NULL,
  `HouseHoldMember4` int DEFAULT NULL,
  `HouseHoldMember5` int DEFAULT NULL,
  `HouseHoldMember6` int DEFAULT NULL,
  PRIMARY KEY (`UHID`),
  UNIQUE KEY `inviteCode_UNIQUE` (`inviteCode`),
  UNIQUE KEY `HouseHoldMember1_UNIQUE` (`HouseHoldMember1`),
  UNIQUE KEY `HouseHoldMember2_UNIQUE` (`HouseHoldMember2`),
  UNIQUE KEY `HouseHoldMember3_UNIQUE` (`HouseHoldMember3`),
  UNIQUE KEY `HouseHoldMember4_UNIQUE` (`HouseHoldMember4`),
  UNIQUE KEY `HouseHoldMember5_UNIQUE` (`HouseHoldMember5`),
  UNIQUE KEY `HouseHoldMember6_UNIQUE` (`HouseHoldMember6`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `householdtable`
--

LOCK TABLES `householdtable` WRITE;
/*!40000 ALTER TABLE `householdtable` DISABLE KEYS */;
/*!40000 ALTER TABLE `householdtable` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-16 10:09:02
