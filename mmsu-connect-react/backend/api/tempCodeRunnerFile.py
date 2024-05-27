from django.contrib.auth.models import User
# from rest_framework import serializers

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ["id", "username", "password"]
#         # Sets the django accept password when creating new user but doesn't allow
#         # django to return password when giving information about the user
#         extra_kwargs = {"password" : {"write_only": True}}

#         def create(self, validated_data):
#             user = User.objects.create_user(**validated_data)
#             print(**validated_data)
#             return user