from datetime import datetime
from zoneinfo import ZoneInfo

def main(event):
  now = datetime.now(ZoneInfo("Etc/GMT+5"))
  current_day = now.weekday()
  current_hour = now.hour
  return {
    "outputFields": {
      "es_laboral": 0 <= current_day <= 4 and 9 <= current_hour < 18
    }
  }