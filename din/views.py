from django.shortcuts import render

from datetime import date
from .dhirk_list import DHIKR_LIST

# Create your views here.
def index(request):
    return render(request, "din/index.html")

def ramadan_counter(request):
    today = date.today().isoformat()

    today_data = next(
        (item for item in DHIKR_LIST if item["date"] == today),
        None
    )

    return render(request, "din/ramadan_counter.html", {
        "today": today_data
    })