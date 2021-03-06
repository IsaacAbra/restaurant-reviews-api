#!/bin/bash

API="http://localhost:4741"
URL_PATH="/create-restaurant"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
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
