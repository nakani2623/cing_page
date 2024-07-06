DATABASE="cing"
QRY_PATH="delete_table.sql"

# TODO dump db

psql -d $DATABASE -a -f $QRY_PATH