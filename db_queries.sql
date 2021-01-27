CREATE DATABASE sahibinden_qa;

use sahibinden_qa CREATE TABLE testbox (id smallint unsigned not null auto_increment, testbox_id int not null, testbox_use varchar(100), issue varchar(100), description varchar(200), mobile_test varchar(60), testbox_type varchar(50) not null, in_use boolean, constraint pk_example primary key (id));

ALTER TABLE testbox CONVERT TO CHARACTER SET utf8;

INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (1, 'Please Select', '', null, 'Mobiletest05', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (2, 'Please Select', '', null, 'Mobiletest06', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (3, 'Please Select', '', null, 'Mobiletest03', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (5, 'Please Select', '', null, 'Mobiletest09', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (6, 'Please Select', '', null, 'Mobiletest10', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (17, 'Please Select', '', null, 'Mobiletest13', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (19, 'Please Select', '', null, 'Mobiletest14', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (37, 'Please Select', '', null, 'Mobiletest15', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (51, 'Please Select', '', null, 'Mobiletest19', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (61, 'Please Select', '', null, 'Mobiletest16', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (62, 'Please Select', '', null, 'Mobiletest17', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (63, 'Please Select', '', null, 'Mobiletest07', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (64, 'Please Select', '', null, 'Mobiletest08', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (76, 'Please Select', '', null, 'Mobiletest11', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (82, 'Please Select', '', null, 'CRM', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (92, 'Please Select', '', null, 'Mobiletest18', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (99, 'Please Select', '', null, 'Mobiletest20', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (130, 'Please Select', '', null, null, 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (131, 'Please Select', '', null, null, 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (132, 'Please Select', '', null, null, 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (133, 'Please Select', '', null, null, 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (134, 'Please Select', '', null, null, 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (65, 'Please Select', '', null, null, 'RELEASE', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (85, 'Please Select', '', null, null, 'RELEASE', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (7, 'Please Select', '', null, null, 'RELEASE', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (8, 'Please Select', '', null, null, 'RELEASE', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (9, 'Please Select', '', null, null, 'RELEASE', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (10, 'Please Select', '', null, null, 'RELEASE', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (11, 'Please Select', '', null, null, 'RELEASE', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (12, 'Please Select', '', null, null, 'RELEASE', 0);


use sahibinden_qa CREATE TABLE qa_user (id smallint unsigned not null auto_increment,  name_surname varchar(100),  constraint pk_example primary key (id));

ALTER TABLE qa_user CONVERT TO CHARACTER SET utf8;

INSERT INTO qa_user (name_surname) VALUES ('Mustafa Ertürk');
INSERT INTO qa_user (name_surname) VALUES ('Savaş Avcu');
INSERT INTO qa_user (name_surname) VALUES ('Esra Köse');
INSERT INTO qa_user (name_surname) VALUES ('Ceren Sarıçam');
INSERT INTO qa_user (name_surname) VALUES ('Mehtap Ertem');
INSERT INTO qa_user (name_surname) VALUES ('Sevinç Sarı');
INSERT INTO qa_user (name_surname) VALUES ('Çağla Çelik');
INSERT INTO qa_user (name_surname) VALUES ('Yağmur Kılıç');
INSERT INTO qa_user (name_surname) VALUES ('Tuba Uluğ');
INSERT INTO qa_user (name_surname) VALUES ('Halil Çifteci');
INSERT INTO qa_user (name_surname) VALUES ('Burak Ergören');
INSERT INTO qa_user (name_surname) VALUES ('Tolga Molla');
INSERT INTO qa_user (name_surname) VALUES ('Enes Aydın');
INSERT INTO qa_user (name_surname) VALUES ('Pınar Ormeci');
INSERT INTO qa_user (name_surname) VALUES ('Hasan Can Yıldır');
INSERT INTO qa_user (name_surname) VALUES ('Nisan Derman');
INSERT INTO qa_user (name_surname) VALUES ('Sezai Can');


use sahibinden_qa CREATE TABLE tags (id smallint unsigned not null auto_increment, data_content varchar(1000000), constraint pk_example primary key (id));

ALTER TABLE tags CONVERT TO CHARACTER SET utf8;

INSERT INTO tags (data_content) VALUES ('');


CREATE TABLE extensions (id smallint unsigned not null auto_increment, name varchar(100), description varchar(100), link varchar(1000), constraint pk_example primary key (id)) CHARACTER SET utf8;

INSERT INTO extensions (name, description, link) VALUES ('sahibinden - testbox', 'Testbox extension for sahibinden', 'https://chrome.google.com/webstore/detail/sahibinden-testbox/hjfhcngngkaoeindmmnofgmciecfkmke');
INSERT INTO extensions (name, description, link) VALUES ('sahibinden - classified builder', 'Classified form fill chrome extension.', 'https://chrome.google.com/webstore/detail/sahibindencom-classified/epkbgddokifbcagmaedbmklcggfmjpdi');
INSERT INTO extensions (name, description, link) VALUES ('EditThisCookie', 'Cookie management extension.', 'https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=tr');