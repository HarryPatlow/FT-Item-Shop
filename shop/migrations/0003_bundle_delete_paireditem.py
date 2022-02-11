# Generated by Django 4.0 on 2022-02-06 13:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_item_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bundle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('main', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='main', to='shop.item')),
                ('sub1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='item1', to='shop.item')),
                ('sub2', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='item2', to='shop.item')),
            ],
        ),
        migrations.DeleteModel(
            name='PairedItem',
        ),
    ]
