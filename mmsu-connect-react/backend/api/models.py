from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    # related_name defines what fieldname we want to put on the user
    # to reference on all of its notes
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")

    def __str__(self):
        return self.title

class PostComment(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    post_id   = models.IntegerField()
    commentor = models.ForeignKey(User, on_delete=models.CASCADE, related_name="comments")

