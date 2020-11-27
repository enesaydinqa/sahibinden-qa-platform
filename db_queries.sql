CREATE DATABASE sahibinden_qa;

use sahibinden_qa CREATE TABLE testbox (id smallint unsigned not null auto_increment, testbox_id int not null, testbox_use varchar(100), issue varchar(100), description varchar(200), mobile_test varchar(60), testbox_type varchar(50) not null, constraint pk_example primary key (id));

INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type) VALUES (1, 'ENES AYDIN', 'no issue', null, 'Mobiletest05', 'GENERAL');
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type) VALUES (2, 'TOLGA MOLLA', 'no issue', null, 'Mobiletest06', 'GENERAL');
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type) VALUES (3, 'TOLGA MOLLA', 'no issue', null, 'Mobiletest03', 'GENERAL');
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type) VALUES (5, 'TOLGA MOLLA', '', null, 'Mobiletest09', 'GENERAL');
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type) VALUES (6, 'Enes Aydın', '', null, 'Mobiletest10', 'GENERAL');
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type) VALUES (17, 'Esra Köse', '', null, 'Mobiletest13', 'GENERAL');
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type) VALUES (19, 'Esra Köse', '', null, 'Mobiletest14', 'GENERAL');


INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type) VALUES (65, null, 'no issue', null, null, 'RELEASE');



use sahibinden_qa CREATE TABLE qa_user (id smallint unsigned not null auto_increment,  name_surname varchar(100),   constraint pk_example primary key (id));

INSERT INTO qa_user (name_surname) VALUES ('Enes Aydin');
INSERT INTO qa_user (name_surname) VALUES ('Tolga Molla');
INSERT INTO qa_user (name_surname) VALUES ('Mustafa Ertürk');
INSERT INTO qa_user (name_surname) VALUES ('Pinar Ormeci');
INSERT INTO qa_user (name_surname) VALUES ('Berivan Göktas');
INSERT INTO qa_user (name_surname) VALUES ('Hasan Can Yildir');



use sahibinden_qa CREATE TABLE tags (id smallint unsigned not null auto_increment, data_content varchar(1000000), constraint pk_example primary key (id));

INSERT INTO tags (data_content) VALUES ('');