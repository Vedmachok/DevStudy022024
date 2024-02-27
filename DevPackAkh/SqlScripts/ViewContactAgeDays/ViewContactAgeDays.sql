create or replace view public."AkhVwContactAgeDays"
as
select "Id" as "AkhId", "Name" as "AkhName", "BirthDate" as "AkhBirthDate",
CURRENT_DATE -"BirthDate" as "AkhAgeDays",
"Id" as "AkhContactId"
from public."Contact"