#ifndef _ROS_beginner_tutorials_Num_h
#define _ROS_beginner_tutorials_Num_h

#include <stdint.h>
#include <string.h>
#include <stdlib.h>
#include "ros/msg.h"

namespace beginner_tutorials
{

  class Num : public ros::Msg
  {
    public:
      typedef int64_t _num_type;
      _num_type num;
      typedef const char* _first_name_type;
      _first_name_type first_name;
      typedef const char* _last_name_type;
      _last_name_type last_name;
      typedef uint8_t _age_type;
      _age_type age;
      typedef uint32_t _score_type;
      _score_type score;

    Num():
      num(0),
      first_name(""),
      last_name(""),
      age(0),
      score(0)
    {
    }

    virtual int serialize(unsigned char *outbuffer) const
    {
      int offset = 0;
      union {
        int64_t real;
        uint64_t base;
      } u_num;
      u_num.real = this->num;
      *(outbuffer + offset + 0) = (u_num.base >> (8 * 0)) & 0xFF;
      *(outbuffer + offset + 1) = (u_num.base >> (8 * 1)) & 0xFF;
      *(outbuffer + offset + 2) = (u_num.base >> (8 * 2)) & 0xFF;
      *(outbuffer + offset + 3) = (u_num.base >> (8 * 3)) & 0xFF;
      *(outbuffer + offset + 4) = (u_num.base >> (8 * 4)) & 0xFF;
      *(outbuffer + offset + 5) = (u_num.base >> (8 * 5)) & 0xFF;
      *(outbuffer + offset + 6) = (u_num.base >> (8 * 6)) & 0xFF;
      *(outbuffer + offset + 7) = (u_num.base >> (8 * 7)) & 0xFF;
      offset += sizeof(this->num);
      uint32_t length_first_name = strlen(this->first_name);
      varToArr(outbuffer + offset, length_first_name);
      offset += 4;
      memcpy(outbuffer + offset, this->first_name, length_first_name);
      offset += length_first_name;
      uint32_t length_last_name = strlen(this->last_name);
      varToArr(outbuffer + offset, length_last_name);
      offset += 4;
      memcpy(outbuffer + offset, this->last_name, length_last_name);
      offset += length_last_name;
      *(outbuffer + offset + 0) = (this->age >> (8 * 0)) & 0xFF;
      offset += sizeof(this->age);
      *(outbuffer + offset + 0) = (this->score >> (8 * 0)) & 0xFF;
      *(outbuffer + offset + 1) = (this->score >> (8 * 1)) & 0xFF;
      *(outbuffer + offset + 2) = (this->score >> (8 * 2)) & 0xFF;
      *(outbuffer + offset + 3) = (this->score >> (8 * 3)) & 0xFF;
      offset += sizeof(this->score);
      return offset;
    }

    virtual int deserialize(unsigned char *inbuffer)
    {
      int offset = 0;
      union {
        int64_t real;
        uint64_t base;
      } u_num;
      u_num.base = 0;
      u_num.base |= ((uint64_t) (*(inbuffer + offset + 0))) << (8 * 0);
      u_num.base |= ((uint64_t) (*(inbuffer + offset + 1))) << (8 * 1);
      u_num.base |= ((uint64_t) (*(inbuffer + offset + 2))) << (8 * 2);
      u_num.base |= ((uint64_t) (*(inbuffer + offset + 3))) << (8 * 3);
      u_num.base |= ((uint64_t) (*(inbuffer + offset + 4))) << (8 * 4);
      u_num.base |= ((uint64_t) (*(inbuffer + offset + 5))) << (8 * 5);
      u_num.base |= ((uint64_t) (*(inbuffer + offset + 6))) << (8 * 6);
      u_num.base |= ((uint64_t) (*(inbuffer + offset + 7))) << (8 * 7);
      this->num = u_num.real;
      offset += sizeof(this->num);
      uint32_t length_first_name;
      arrToVar(length_first_name, (inbuffer + offset));
      offset += 4;
      for(unsigned int k= offset; k< offset+length_first_name; ++k){
          inbuffer[k-1]=inbuffer[k];
      }
      inbuffer[offset+length_first_name-1]=0;
      this->first_name = (char *)(inbuffer + offset-1);
      offset += length_first_name;
      uint32_t length_last_name;
      arrToVar(length_last_name, (inbuffer + offset));
      offset += 4;
      for(unsigned int k= offset; k< offset+length_last_name; ++k){
          inbuffer[k-1]=inbuffer[k];
      }
      inbuffer[offset+length_last_name-1]=0;
      this->last_name = (char *)(inbuffer + offset-1);
      offset += length_last_name;
      this->age =  ((uint8_t) (*(inbuffer + offset)));
      offset += sizeof(this->age);
      this->score =  ((uint32_t) (*(inbuffer + offset)));
      this->score |= ((uint32_t) (*(inbuffer + offset + 1))) << (8 * 1);
      this->score |= ((uint32_t) (*(inbuffer + offset + 2))) << (8 * 2);
      this->score |= ((uint32_t) (*(inbuffer + offset + 3))) << (8 * 3);
      offset += sizeof(this->score);
     return offset;
    }

    const char * getType(){ return "beginner_tutorials/Num"; };
    const char * getMD5(){ return "379cbe21d44c48c3d9a5a30aa0ddaafb"; };

  };

}
#endif