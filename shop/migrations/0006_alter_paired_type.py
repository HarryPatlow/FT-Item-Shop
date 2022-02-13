# Generated by Django 4.0 on 2022-02-12 13:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0005_paired_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paired',
            name='type',
            field=models.CharField(choices=[('wrap', 'Wrap'), ('emote', 'Emote'), ('dance', 'Dance'), ('tool', 'Harvesting Tool'), ('glider', 'Glider'), ('music', 'Music'), ('screen', 'Loading Screen'), ('backpack', 'Backpack')], max_length=16),
        ),
    ]