from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, PostSerializer, PostCommentSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Post, PostComment

class PostListCreate(generics.ListCreateAPIView):
    # All generic views can be leave as is
    # As long as specifiy a serializer class, permission class and query set it still works
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(author=user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class PostDelete(generics.DestroyAPIView):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(author=user)

class PostCommentCreate(generics.ListCreateAPIView):
    serializer_class = PostCommentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return PostComment.objects.filter(post_id=self.kwargs.get('post_id'))
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(commentor=self.request.user, post_id = self.request.data['post_id'])
        else:
            print(serializer.errors)

    
# Create your views here.
class CreateUserView(generics.CreateAPIView):
    # Stores all the user object we are going to be looking at avoid duplicates
    queryset = User.objects.all()
    # Sets the data needed to accept to create new user
    serializer_class = UserSerializer
    permission_classes = [AllowAny]