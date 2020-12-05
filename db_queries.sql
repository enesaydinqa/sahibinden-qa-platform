CREATE DATABASE sahibinden_qa;

use sahibinden_qa CREATE TABLE testbox (id smallint unsigned not null auto_increment, testbox_id int not null, testbox_use varchar(100), issue varchar(100), description varchar(200), mobile_test varchar(60), testbox_type varchar(50) not null, in_use boolean, constraint pk_example primary key (id));

ALTER TABLE testbox CONVERT TO CHARACTER SET utf8;

INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (1, 'ENES AYDIN', 'no issue', null, 'Mobiletest05', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (2, 'TOLGA MOLLA', 'no issue', null, 'Mobiletest06', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (3, 'TOLGA MOLLA', 'no issue', null, 'Mobiletest03', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (5, 'TOLGA MOLLA', '', null, 'Mobiletest09', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (6, 'Enes Aydın', '', null, 'Mobiletest10', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (17, 'Esra Köse', '', null, 'Mobiletest13', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (19, 'Esra Köse', '', null, 'Mobiletest14', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (37, 'Esra Köse', '', null, 'Mobiletest15', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (51, 'Esra Köse', '', null, 'Mobiletest19', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (61, 'Esra Köse', '', null, 'Mobiletest16', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (62, 'Esra Köse', '', null, 'Mobiletest17', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (63, 'Esra Köse', '', null, 'Mobiletest07', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (64, 'Esra Köse', '', null, 'Mobiletest08', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (76, 'Esra Köse', '', null, 'Mobiletest11', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (82, 'Esra Köse', '', null, 'CRM', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (92, 'Esra Köse', '', null, 'Mobiletest18', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (99, 'Esra Köse', '', null, 'Mobiletest20', 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (130, 'Esra Köse', '', null, null, 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (127, 'Esra Köse', '', null, null, 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (132, 'Esra Köse', '', null, null, 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (133, 'Esra Köse', '', null, null, 'GENERAL', 0);
INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type, in_use) VALUES (134, 'Esra Köse', '', null, null, 'GENERAL', 0);




INSERT INTO testbox (testbox_id, testbox_use, issue, description, mobile_test, testbox_type,in_use) VALUES (65, null, 'no issue', null, null, 'RELEASE', 0);



use sahibinden_qa CREATE TABLE qa_user (id smallint unsigned not null auto_increment,  name_surname varchar(100),   constraint pk_example primary key (id));

ALTER TABLE qa_user CONVERT TO CHARACTER SET utf8;

INSERT INTO qa_user (name_surname) VALUES ('Enes Aydin');
INSERT INTO qa_user (name_surname) VALUES ('Tolga Molla');
INSERT INTO qa_user (name_surname) VALUES ('Mustafa Ertürk');
INSERT INTO qa_user (name_surname) VALUES ('Pinar Ormeci');
INSERT INTO qa_user (name_surname) VALUES ('Berivan Göktas');
INSERT INTO qa_user (name_surname) VALUES ('Hasan Can Yildir');



use sahibinden_qa CREATE TABLE tags (id smallint unsigned not null auto_increment, data_content varchar(1000000), constraint pk_example primary key (id));

ALTER TABLE tags CONVERT TO CHARACTER SET utf8;

INSERT INTO tags (data_content) VALUES ('');