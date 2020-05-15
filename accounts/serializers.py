from .models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    referral_id = serializers.CharField(read_only=True)
    class Meta:
        model = User
        fields = ('id', 'email', 'name', 'password', 'phone', 'referrer', 'referral_id', 'is_type')

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class LoginSerializer(serializers.Serializer):
    username = serializers.EmailField()
    password = serializers.CharField(max_length = 255)