# Generated by Django 5.0.6 on 2024-05-27 15:59

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_postcomment'),
    ]

    operations = [
        migrations.AddField(
            model_name='postcomment',
            name='post_id',
            field=models.ForeignKey(default=-1, on_delete=django.db.models.deletion.CASCADE, related_name='comment_post', to='api.post'),
        ),
    ]
