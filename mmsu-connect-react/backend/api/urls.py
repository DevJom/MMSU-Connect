from django.urls import path
from . import views

urlpatterns = [
    path("posts/", views.PostListCreate.as_view(), name="note-post"),
    path("posts/delete/<int:pk>/", views.PostDelete.as_view(), name="delete-post"),
    path("posts/comment/<int:post_id>/", views.PostCommentCreate.as_view(), name="post-comment"),
]