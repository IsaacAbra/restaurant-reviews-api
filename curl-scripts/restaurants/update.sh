#!/bin/bash

API="http://localhost:4741"
URL_PATH="/restaurants"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "restaurant": {
      "name": "'"${NAME}"'",
      "cuisine": "'"${CUISINE}"'",
      "location": "'"${LOCATION}"'",
      "review": "'"${REVIEW}"'",
      "rating": "'"${RATING}"'"
    }
  }'

echo
