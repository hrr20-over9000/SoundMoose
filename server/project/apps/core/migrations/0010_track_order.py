# -*- coding: utf-8 -*-
# Generated by Django 1.9.12 on 2017-01-16 18:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_auto_20170116_1838'),
    ]

    operations = [
        migrations.AddField(
            model_name='track',
            name='order',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]