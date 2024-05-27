from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Post, PostComment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        # Sets the django accept password when creating new user but doesn't allow
        # django to return password when giving information about the user
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["id", "title", "content", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}

class PostCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostComment
        fields = ["id", "content", "created_at", "post_id", "commentor"]
        extra_kwargs = {"commentor": {"read_only" : True}}

        