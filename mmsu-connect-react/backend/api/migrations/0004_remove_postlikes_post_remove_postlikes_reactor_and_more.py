# Generated by Django 5.0.6 on 2024-05-27 15:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_postcomments_postlikes'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='postlikes',
            name='post',
        ),
        migrations.RemoveField(
            model_name='postlikes',
            name='reactor',
        ),
        migrations.DeleteModel(
            name='PostComments',
        ),
        migrations.DeleteModel(
            name='PostLikes',
        ),
    ]
