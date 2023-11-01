drop database if exists finance_db;

create database finance_db;

\c finance_db;

create table bill_to_pay (
    id uuid primary key,
    value decimal(5,2) not null,
    due_date date
);