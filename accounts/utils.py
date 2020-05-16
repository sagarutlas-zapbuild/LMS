from .serializers import UserSerializer


def jwt_response_handler(token, user=None, request=None):
    userdata = {}
    print(user)
    serializer = UserSerializer(user, context={'request': request})
    if serializer.data['id']:
        userdata['id'] = serializer.data.get('id')
        userdata['email'] = serializer.data.get('email')
        userdata['name'] = serializer.data.get('name')
        userdata['is_type'] = serializer.data.get('is_type')
        print(userdata,"\n\n\n")
        return {
            'token': token,
            'user': userdata
        }
    else:
        return(serializer.errors)

