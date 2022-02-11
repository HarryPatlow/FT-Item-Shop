from django.contrib import admin

from .models import Bundle, Item, Paired
# Register your models here.

from django.utils.html import format_html

@admin.register(Item) 
class ItemAd(admin.ModelAdmin):

    def image_tag(self, obj):
        return format_html('<img src="{}" style="width:70px; height:80px; object-fit:cover" />'.format(obj.thumbnail.url))

    image_tag.short_description = 'Image'

    list_display = ['image_tag','title','cost','rarity']


@admin.register(Bundle)
class BundleAd(admin.ModelAdmin):
    def image_tag(self, obj):
        return format_html(
            '<img src="{}" style="width:70px; height:80px; object-fit:cover" />'.format(obj.main.thumbnail.url)+'<img src="{}" style="width:70px; height:80px; object-fit:cover" />'.format(obj.sub1.thumbnail.url)+'<img src="{}" style="width:70px; height:80px; object-fit:cover" />'.format(obj.sub2.thumbnail.url)
        )

    image_tag.short_description = 'Image'

    list_display = ['image_tag','main','sub1','sub2']
@admin.register(Paired)
class ItemAd(admin.ModelAdmin):

    def image_tag(self, obj):
        return format_html('<img src="{}" style="width:70px; height:80px; object-fit:cover" />'.format(obj.thumbnail.url))

    image_tag.short_description = 'Image'

    list_display = ['image_tag','title','cost','type']