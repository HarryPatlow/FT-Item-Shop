# Generated by Django 4.0 on 2022-02-06 14:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0004_paired_remove_item_type_alter_bundle_sub1_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='paired',
            name='type',
            field=models.CharField(choices=[('wrap', 'Wrap'), ('emote', 'Emote'), ('tool', 'Harvesting Tool'), ('glider', 'Glider'), ('music', 'Music'), ('screen', 'Loading Screen'), ('backpack', 'Backpack')], default=None, max_length=16),
            preserve_default=False,
        ),
    ]
