#!/bin/bash

echo "SELECT 'CREATE ROLE development LOGIN PASSWORD 'development'\gexec" | psql -U development
echo "SELECT 'CREATE DATABASE rento2' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'rento2')\gexec" | psql -U development
echo "\connect rento2; CREATE SCHEMA public\gexec" | psql -U development