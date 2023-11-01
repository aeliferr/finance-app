drop database if exists marcenaria_db;

create database marcenaria_db;

create table bill_to_pay (
    id uuid primary key,
    value decimal(5,2) not null,
    due_date date
);