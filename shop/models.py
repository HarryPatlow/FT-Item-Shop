from distutils.command.upload import upload
from random import choices
from django.db.models import CASCADE
from django.db import models
from django.utils.html import mark_safe

# Create your models here.

rarity_types = (
    ('C','Common'), 
    ('U','Uncommon'), 
    ('R','Rare'), 
    ('E','Epic'), 
    ('L','Legendary'), 
    ('M','Mythical')
)
type = (
    ('wrap','Wrap'),
    ('emote','Emote'),
    ('dance','Dance'),
    ('tool','Harvesting Tool'),
    ('glider','Glider'),
    ('music','Music'),
    ('screen','Loading Screen'),
    ('backpack','Backpack')
)
class Item(models.Model):
    thumbnail = models.ImageField(upload_to='uploads/')
    title = models.CharField(max_length=32)
    cost = models.IntegerField()
    rarity = models.CharField(choices=rarity_types, max_length=9)
    def __str__(self):
        return self.title

class Paired(models.Model):
    thumbnail = models.ImageField(upload_to='uploads/')
    title = models.CharField(max_length=32)
    cost = models.IntegerField()
    type = models.CharField(choices=type, max_length=16)
    def __str__(self):
        return self.title

class Bundle(models.Model):
    main = models.ForeignKey(Item, on_delete=CASCADE, related_name='main')
    sub1 = models.ForeignKey(Paired, on_delete=CASCADE, related_name='item1')
    sub2 = models.ForeignKey(Paired, on_delete=CASCADE, related_name='item2')
    def __str__(self):
        return f"{self.main} with {self.sub1} and {self.sub2}"