from django.shortcuts import render
from .models import Item, Bundle

from django import template

# Create your views here.

item_filtered = []

for bundle in Bundle.objects.all():
    item_filtered.append(bundle.main.title)

rarity_colors = {
    "common":"99A1A4",
    "uncommon":"51A71B",
    "rare":"26A4D7",
    "epic":"A33DD5",
    "legendary":"ED9A5B",
    "mythical":"BA9C35"
}


def index(request):
    return render(request, "shop/index.html",{
        "items": Item.objects.exclude(title__in=item_filtered),
        "bundles": Bundle.objects.all()
    })
