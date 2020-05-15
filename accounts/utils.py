from .serializers import UserSerializer


def jwt_response_handler(token, user=None, request=None):
    userdata = {}
    print(UserSerializer(user, context={'request': request}).data)
    serializer = UserSerializer(user, context={'request': request})
    userdata['id'] = serializer.data.get('id')
    userdata['email'] = serializer.data.get('email')
    userdata['name'] = serializer.data.get('name')
    userdata['is_type'] = serializer.data.get('is_type')
    print(userdata,"\n\n\n")
    return {
        'token': token,
        'user': userdata
    }

