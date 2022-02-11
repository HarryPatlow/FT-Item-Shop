# Generated by Django 4.0 on 2022-02-06 11:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('thumbnail', models.ImageField(upload_to='uploads/')),
                ('title', models.CharField(max_length=32)),
                ('cost', models.IntegerField()),
                ('rarity', models.CharField(choices=[('C', 'Common'), ('U', 'Uncommon'), ('R', 'Rare'), ('E', 'Epic'), ('L', 'Legendary'), ('M', 'Mythical')], max_length=9)),
            ],
        ),
        migrations.CreateModel(
            name='PairedItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='item1', to='shop.item')),
                ('item2', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='item2', to='shop.item')),
            ],
        ),
    ]